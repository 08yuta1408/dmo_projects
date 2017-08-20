import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Serializable;
import java.util.Random;
import java.util.concurrent.Semaphore;


//import PQDijkstra.Edge;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.PriorityQueue;
import java.util.Queue;

public class Information implements Serializable {
    public Inhabitant[] inh = new Inhabitant[Sim.I]; //住人
    public double[][][] dist = new double[Sim.J][Sim.map.N][Sim.map.N];
    public int[][][] pred = new int[Sim.J][Sim.map.N][Sim.map.N]; //経路
    public int[][] uSumForward = new int[Sim.J][Sim.map.W]; //道路交通量（順方向）
    public int[][] uSumBackward = new int[Sim.J][Sim.map.W]; //道路交通量（逆方向）
    //public int[][] uRWSum=new int[Sim.J][Sim.map.RW];//線路交通量
    public byte[][] origin = new byte[Sim.I][Sim.map.N];//Origin情報
    public int[][] destination = new int[Sim.I][Sim.map.N];//Destination情報
    public byte[][] license = new byte[Sim.I][Sim.J];//driver's license情報
    Semaphore semaphore = new Semaphore(Sim.MAX_THREADS);

    public int[] inh_shuffle = new int[Sim.I];  //住民の実行順をシャッフルするための配列

    public HashMap<String, Integer> capacity = new HashMap<String, Integer>();
    static final int motorway = 4400;//片側2車線を想定
    static final int motorway_link = 2200;//とりあえずmotorwayの1車線分に
    static final int trunk = 4400;//片側2車線を想定
    static final int trunk_link = 2200;//とりあえずtrunkの1車線分に
    static final int primary = 3000;//片側2車線を想定
    static final int primary_link = 1500;//とりあえずprimaryの1車線分に
    static final int secondary = 1250;//片側1車線を想定
    static final int secondary_link = 1250;//とりあえずsecondaryと同じに
    static final int tertiary = 500;//1車線道路
    static final int tertiary_link = 500;//とりあえずtertiaryと同じに
    static final int unclassified = 200;//1車線道路
    static final int residential = 50;//1車線道路
    static final int service = 0;//未設定
    static final int track = 10;
    static final int living_street = 10;
    static final int virtual = 10000;

    //public double totalSatisfaction=0.0 ;

    Information() {
        capacity.put("motorway", motorway);
        capacity.put("motorway_link", motorway_link);
        capacity.put("trunk", trunk);
        capacity.put("trunk_link", trunk_link);
        capacity.put("primary", primary);
        capacity.put("primary_link", primary_link);
        capacity.put("secondary", secondary);
        capacity.put("secondary_link", secondary_link);
        capacity.put("tertiary", tertiary);
        capacity.put("tertiary_link", tertiary_link);
        capacity.put("unclassified", unclassified);
        capacity.put("residential", residential);
        capacity.put("service", service);
        capacity.put("services", service);
        capacity.put("track", track);
        capacity.put("living_street", living_street);
        capacity.put("virtual", virtual);
        /*
         try {//ODデータCSVファイル読込
          File csv = new File(Sim.odfile); // CSVデータファイル
          BufferedReader br = new BufferedReader(new FileReader(csv));
          // 最終行まで読み込む
          String line = "";
          while ((line = br.readLine()) != null) {
            // 1行をデータの要素に分割
            StringTokenizer st = new StringTokenizer(line, ",");
            int agent_id = Integer.parseInt(st.nextToken());
            int origin_m = Integer.parseInt(st.nextToken());
            int origin_n = Integer.parseInt(st.nextToken());
            int dest_m = Integer.parseInt(st.nextToken());
            int dest_n = Integer.parseInt(st.nextToken());
            st.nextToken();
            st.nextToken();
            st.nextToken();
            byte d_l = Byte.parseByte(st.nextToken());
            if(agent_id<Sim.I){
                origin[agent_id][origin_m][origin_n]=1;
                destination[agent_id][dest_m][dest_n]=1;
                license[agent_id][2] = d_l;//2:自動車のライセンス
            }
          }
          br.close();

        } catch (FileNotFoundException e) {
          // Fileオブジェクト生成時の例外捕捉
          e.printStackTrace();
        } catch (IOException e) {
          // BufferedReaderオブジェクトのクローズ時の例外捕捉
          e.printStackTrace();
        }
         */
        Random rnd = new Random(0);
        //int origin_n=0;
        for (int i = 0; i < Sim.I; i++) {
            /*
            for(int n=0; n<Sim.map.N; n++){
                if(origin[i][n]==1){
                    origin_n=n;
                }
            }
            */
            //inh[i]=new Inhabitant(i+1, origin_n, destination[i], license[i], semaphore);
            destination[i][Sim.map.way.get(rnd.nextInt(Sim.map.R)).nHead] = 1;
            license[i][2] = 1;//テスト的に自動車免許を有りにする ToDo
            inh[i] = new Inhabitant(i + 1, rnd.nextInt(Sim.map.N), destination[i], license[i], semaphore);

        }
        //
        //    ArrayList<Integer> list = new ArrayList<Integer>();
        //      for(int i=0; i<Sim.I; i++){
        //          list.add(i);
        //      }
        //      Collections.shuffle(list, new Random(Sim.seed_for_agent_order));
        //      //Collections.shuffle(list);
        //      for(int i=0; i<Sim.I; i++){
        //          inh_shuffle[i] = list.get(i);
        //    }

        for (int i = 0; i < Sim.I; i++) {
            inh_shuffle[i] = i;
        }
        for (int i = Sim.I - 1; i > 0; i--) {
            int j = Sim.r_sense.nextInt(i + 1);
            int tmp = inh_shuffle[i];
            inh_shuffle[i] = inh_shuffle[j];
            inh_shuffle[j] = tmp;
        }

        for (int j = 0; j < Sim.J; j++) {
            for (int w = 0; w < Sim.map.W; w++) {
                uSumForward[j][w] = 0;
                uSumBackward[j][w] = 0;
            }
            /*
            for(int w=Sim.map.R; w<Sim.map.RW; w++){
                uRWSum[j][w]=0;
            }
            */
        }

    }


    public void trafficVolume(int i_start, int i_end) { //交通量計算&利用モビリティ算出
        //利用モビリティ数の計算（延べ数）
        int flag = 0;
        for (int j = 0; j < Sim.J; j++) {
            for (int i = i_start; i <= i_end; i++) {
                flag = 0;
                for (int w = 0; w < Sim.map.W; w++) {
                    uSumForward[j][w] += Sim.info.inh[inh_shuffle[i]].uForward[j][w] * Sim.pI;
                    uSumBackward[j][w] += Sim.info.inh[inh_shuffle[i]].uBackward[j][w] * Sim.pI;
                    if (Sim.info.inh[inh_shuffle[i]].uForward[j][w] > 0 || Sim.info.inh[inh_shuffle[i]].uBackward[j][w] > 0) {
                        flag = 1;
                    }
                }
                if (flag == 1) {
                    Sim.no_mobilityuse[j]++;//おそらくこの計算じゃNG ToDo
                }
            }
            //if(flag==1){
            //  Sim.no_mobilityuse[j]++;//おそらくこの計算じゃNG ToDo
            //}
        }
        //利用モビリティ数の計算（代表交通手段のみ）
        /* 矩形が前提で書かれているため，大幅に書き換えの必要あり
        for(int i=i_start; i<=i_end; i++){
            for(int n=0; n<Sim.map.N; n++){
                if(Sim.info.inh[inh_shuffle[i]].destination[n]==1){
                    Sim.no_mainmode[0][Sim.info.inh[inh_shuffle[i]].mainmode[n]]++;
                    Sim.no_mainmode[Math.abs(Sim.info.inh[inh_shuffle[i]].zL-n)][Sim.info.inh[inh_shuffle[i]].mainmode[n]]++;
            }
        }
        }
        */
    }

    /*
    public void warshallFloyd(){//Warshall-Floyd法により、経路価値の計算
        for(int n1=0; n1<Sim.map.N; n1++){//distance初期化
            for(int n2=0; n2<Sim.map.N; n2++){
                if(Sim.map.nodes2way[n1][n2]==-1 || Sim.map.way.get(Sim.map.nodes2way[n1][n2]).mobilityType!=0){
                    dist[0][n1][n2]=Sim.NOROUTE;//徒歩を代表にしているため0を用いている
                }
                else{
                    dist[0][n1][n2]=(Sim.map.way.get(Sim.map.nodes2way[n1][n2]).length)*(1+Sim.BPR_alpha*Math.pow(((double)road_traffic(Sim.map.nodes2way[n1][n2])/Sim.phys.l[Sim.map.nodes2way[n1][n2]]),Sim.BPR_beta));
                }
                pred[0][n1][n2]=n1;
            }
            dist[0][n1][n1]=0;
        }
        for(int n=0; n<Sim.map.N; n++){
            for(int n1=0; n1<Sim.map.N; n1++){
                for(int n2=0; n2<Sim.map.N; n2++){
                    if(dist[0][n1][n]+dist[0][n][n2]<dist[0][n1][n2]){
                        dist[0][n1][n2] = dist[0][n1][n] + dist[0][n][n2];
                        pred[0][n1][n2]=pred[0][n][n2];
                    }
                }
            }
        }
        for(int n1=0; n1<Sim.map.N; n1++){//0以外のモビリティにも適用
            for(int n2=0; n2<Sim.map.N; n2++){
                for(int j=1; j<Sim.J; j++){
                    if(Sim.station_existence[j]==0){
                        dist[j][n1][n2] = dist[0][n1][n2];
                        pred[j][n1][n2] = pred[0][n1][n2];
                    }
                }
            }
        }
    }
    */

    /*
    public void dijkstra(){//Dijkstra法により、経路価値の計算
        for(int n_start=0; n_start<Sim.map.N; n_start++){//distance初期化
            for(int n_end=0; n_end<Sim.map.N; n_end++){
                if(Sim.map.nodes2way[n_start][n_end]==-1|| Sim.map.way.get(Sim.map.nodes2way[n_start][n_end]).mobilityType!=0){
                    dist[0][n_start][n_end]=Sim.NOROUTE;//徒歩を代表にしているため0を用いている
                }
                else{
                    dist[0][n_start][n_end]=(Sim.map.way.get(Sim.map.nodes2way[n_start][n_end]).length)*(1+Sim.BPR_alpha*Math.pow(((double)road_traffic(Sim.map.nodes2way[n_start][n_end])/Sim.phys.l[Sim.map.nodes2way[n_start][n_end]]),Sim.BPR_beta));
                }
                pred[0][n_start][n_end]=n_start;
            }
            dist[0][n_start][n_start]=0;
        }

        for(int n_start=0; n_start<Sim.map.N; n_start++){
            boolean [] visited = new boolean [Sim.map.N];
            int next=0;
            for (int k=0; k<Sim.map.N; k++){
                double min = Double.MAX_VALUE;
                for (int n=0; n<Sim.map.N; n++){
                    if(!visited[n] && dist[0][n_start][n]<min){
                        next = n;
                        min = dist[0][n_start][n];
                    }
                }
                visited[next] = true;
                for (int n=0; n<Sim.map.adjacentNode[next].size(); n++) {
                    final int v = Sim.map.adjacentNode[next].get(n);
                    final double d = dist[0][n_start][next] + Sim.map.way.get(Sim.map.nodes2way[next][v]).length;
                    if (dist[0][n_start][v] > d) {
                        dist[0][n_start][v] = d;
                        pred[0][n_start][v] = next;
                    }
                }
            }
        }
        for(int n1=0; n1<Sim.map.N; n1++){//0以外のモビリティにも適用
            for(int n2=0; n2<Sim.map.N; n2++){
                for(int j=1; j<Sim.J; j++){
                    if(Sim.station_existence[j]==0){
                        dist[j][n1][n2] = dist[0][n1][n2];
                        pred[j][n1][n2] = pred[0][n1][n2];
                    }
                }
            }
        }
    }
    */


    public void pqdijkstra() { //PQDijkstra法により、経路価値の計算
        boolean[] fixed = new boolean[Sim.map.N];//最短距離が確定したかどうか
        List<Edge>[] edges = new List[Sim.map.N];
        for (int n = 0; n < Sim.map.N ; n++ ) {
            edges[n] = new ArrayList<Edge>();
        }

        for (int nStart = 0; nStart < Sim.map.N; nStart++) { //distance初期化
            for (int nEnd = 0; nEnd < Sim.map.N; nEnd++) {
                dist[0][nStart][nEnd] = Sim.NOROUTE; //徒歩を代表にしているため0を用いている
                pred[0][nStart][nEnd] = nStart;
            }
            dist[0][nStart][nStart] = 0;
        }

        for (int w = 0; w < Sim.map.R; w++) {
            //List<Integer> headTailMom = new ArrayList<Integer>();
            int head = Sim.map.way.get(w).nHead;
            int tail = Sim.map.way.get(w).nTail;
            /*
            headTailMom.add(Sim.map.way.get(w).nHead);
            headTailMom.add(Sim.map.way.get(w).nTail);
            headTailMom.add(0);
            System.out.println("w="+w);
            System.out.println(Sim.map.nodes2way.get(headTailMom));
            System.out.println(Sim.map.way.get(Sim.map.nodes2way.get(headTailMom)).length);
            System.out.println(road_traffic((int)(int)Sim.map.nodes2way.get(headTailMom)));
            System.out.println(Sim.phys.l[Sim.map.nodes2way.get(headTailMom)]);
            //double length = (Sim.map.way.get(Sim.map.nodes2way.get(headTailMom)).length)*(1+Sim.BPR_alpha*Math.pow(((double)road_traffic((int)(int)Sim.map.nodes2way.get(headTailMom))/Sim.phys.l[Sim.map.nodes2way.get(headTailMom)]),Sim.BPR_beta));
             */

            //static final int trunk = 4400;//片側2車線を想定
            //static final int primary = 3000;////片側2車線を想定
            //static final int secondary = 1250;//片側1車線を想定
            //  static final int teriary = 500;//1車線道路
            //static final int unclassified = 200;//1車線道路
            //  static final int residential = 50;//1車線道路

            double lengthForward = 0;
            double lengthBackward = 0;
            if (Sim.map.way.get(w).oneway == true) {
                //              System.out.println(Sim.map.way.get(w).length);
                //              System.out.println(roadTrafficForward(w));
                //              System.out.println(Sim.map.way.get(w).roadType);
                //              System.out.println(capacity.get(Sim.map.way.get(w).roadType));
                lengthForward = (Sim.map.way.get(w).length) * (1 + Sim.BPR_alpha * Math.pow(((double)roadTrafficForward(w) / capacity.get(Sim.map.way.get(w).roadType)), Sim.BPR_beta));
                //lengthForward = (Sim.map.way.get(w).length);
                lengthBackward = Sim.NOROUTE;
            } else {
                //System.out.println(Sim.map.way.get(w).length);
                //System.out.println(roadTrafficForward(w));
                //System.out.println(Sim.map.way.get(w).roadType);
                //System.out.println(capacity.get(Sim.map.way.get(w).roadType));
                lengthForward = (Sim.map.way.get(w).length) * (1 + Sim.BPR_alpha * Math.pow(((double)roadTrafficForward(w) / capacity.get(Sim.map.way.get(w).roadType)), Sim.BPR_beta));
                lengthBackward = (Sim.map.way.get(w).length) * (1 + Sim.BPR_alpha * Math.pow(((double)roadTrafficBackward(w) / capacity.get(Sim.map.way.get(w).roadType)), Sim.BPR_beta));
                //lengthForward = (Sim.map.way.get(w).length);
                //lengthBackward = (Sim.map.way.get(w).length);
            }
            //double length = (Sim.map.way.get(w).length)*(1+Sim.BPR_alpha*Math.pow(((double)road_traffic(w)/Sim.phys.l[w]),Sim.BPR_beta));
            edges[head].add(new Edge(head, tail, lengthForward));//from to
            edges[tail].add(new Edge(tail, head, lengthBackward));//to from 無向グラフのため
        }

        for (int nStart = 0; nStart < Sim.map.N; nStart++) {
            for (int nEnd = 0; nEnd < Sim.map.N; nEnd++) {
                fixed[nEnd] = false;//最短距離は未確定
            }
            Queue<Edge> q = new PriorityQueue<Edge>();
            q.add(new Edge(nStart, nStart, 0)); //スタート地点を入れる
            while (!q.isEmpty()) {
                Edge e = q.poll();//最小距離のノードを取り出す
                if (fixed[e.dst]) {
                    continue;
                }
                fixed[e.dst] = true;
                for (Edge v : edges[e.dst]) {
                    if (!fixed[v.dst]) { //もし最短距離が未確定で
                        //System.out.println("!!!!!!!"+dist[0][nStart][e.dst]+" + "+v.len+" < "+dist[0][nStart][v.dst]);
                        if (dist[0][nStart][e.dst] + v.len < dist[0][nStart][v.dst]) { //かつ接続元＋先までの距離が現在記録されている距離より短ければ
                            dist[0][nStart][v.dst] = dist[0][nStart][e.dst] + v.len;//更新
                            pred[0][nStart][v.dst] = (int)e.dst;
                            q.add(new Edge(e.dst, v.dst , dist[0][nStart][v.dst]));//ヒープに挿入
                            // System.out.println("node: " +e.dst);
                            // if(nStart==56){
                            //  System.out.println("node: " +e.dst);
                            // }
                        }
                    }
                }
            }
        }

        for (int nStart = 0; nStart < Sim.map.N; nStart++) { //0以外のモビリティにも適用
            for (int nEnd = 0; nEnd < Sim.map.N; nEnd++) {
                for (int j = 1; j < Sim.J; j++) {
                    if (Sim.station_existence[j] == 0) {
                        dist[j][nStart][nEnd] = dist[0][nStart][nEnd];
                        pred[j][nStart][nEnd] = pred[0][nStart][nEnd];
                    }
                    /*
                    if(Sim.station_existence[j]==1 && j!=3){//試験的に設定　最終的に削除することToDo
                        dist[j][nStart][nEnd] = Sim.NOROUTE;
                        pred[j][nStart][nEnd] = pred[0][nStart][nEnd];
                    }
                    */
                }
            }
        }
    }

    /*
    public void pqdijkstraBus(){//PQDijkstra法により、経路価値の計算
        int j = 7;//バス
        boolean[] fixed = new boolean[Sim.map.N];//最短距離が確定したかどうか
        List<Edge>[] edges = new List[Sim.map.N];
        for (int n = 0;n < Sim.map.N ;n++ ) {
          edges[n]=new ArrayList<Edge>();
      }

        for(int nStart=0; nStart<Sim.map.N; nStart++){//distance初期化
            for(int nEnd=0; nEnd<Sim.map.N; nEnd++){
                dist[j][nStart][nEnd]=Sim.NOROUTE;
                pred[j][nStart][nEnd]=nStart;
            }
            dist[j][nStart][nStart]=j;
        }

        for(Iterator<PTRoute> it1 = Sim.map.ptroute.iterator();it1.hasNext();){
            for(Iterator<Way> it2 = it1.next().route.iterator();it2.hasNext();){
                Way currentWay = it2.next();
                int head = currentWay.nHead;
                int tail = currentWay.nTail;
                double lengthForward = 0;
                double lengthBackward = 0;
                lengthForward = (currentWay.length)*(1+Sim.BPR_alpha*Math.pow(((double)roadTrafficForward(w)/capacity.get(currentWay.roadType)),Sim.BPR_beta));
                lengthBackward = Sim.NOROUTE;
            edges[head].add(new Edge(head, tail, lengthForward));//from to
      edges[tail].add(new Edge(tail, head, lengthBackward));//to from
    }

        for(int nStart=0; nStart<Sim.map.N; nStart++){
            for(int nEnd=0; nEnd<Sim.map.N; nEnd++){
                fixed[nEnd] = false;//最短距離は未確定
            }
            Queue<Edge> q = new PriorityQueue<Edge>();
            q.add(new Edge(nStart,nStart,0));//スタート地点を入れる
      while(!q.isEmpty()) {
        Edge e = q.poll();//最小距離のノードを取り出す
        if(fixed[e.dst]){
          continue;
        }
        fixed[e.dst] = true;
        for (Edge v :edges[e.dst]) {
          if(!fixed[v.dst]){//もし最短距離が未確定で
            //System.out.println("!!!!!!!"+dist[0][nStart][e.dst]+" + "+v.len+" < "+dist[0][nStart][v.dst]);
            if(dist[0][nStart][e.dst] + v.len < dist[0][nStart][v.dst]){//かつ接続元＋先までの距離が現在記録されている距離より短ければ
                dist[0][nStart][v.dst] = dist[0][nStart][e.dst] + v.len;//更新
                        pred[0][nStart][v.dst] = (int)e.dst;
              q.add(new Edge(e.dst, v.dst , dist[0][nStart][v.dst]));//ヒープに挿入
             // System.out.println("node: " +e.dst);
             // if(nStart==56){
             //     System.out.println("node: " +e.dst);
             // }
            }
          }
        }
      }
        }
    }
    */
    public void pqdijkstraTrak() { //路線の経路
        for (int j = 0; j < Sim.J; j++) {
            if (Sim.station_existence[j] == 1) { //とりあえずJRに固定ToDo
                boolean[] fixed = new boolean[Sim.map.N];//最短距離が確定したかどうか
                List<Edge>[] edges = new List[Sim.map.N];
                for (int n = 0; n < Sim.map.N ; n++ ) {
                    edges[n] = new ArrayList<Edge>();
                }

                for (int nStart = 0; nStart < Sim.map.N; nStart++) { //distance初期化
                    for (int nEnd = 0; nEnd < Sim.map.N; nEnd++) {
                        dist[j][nStart][nEnd] = Sim.NOROUTE;
                        pred[j][nStart][nEnd] = nStart;
                    }
                    dist[j][nStart][nStart] = 0;
                }
                for (int w = Sim.map.R; w < Sim.map.RW; w++) {
                    int mom = Sim.map.way.get(w).mobilityType;
                    if (mom == j) {
                        int head = Sim.map.way.get(w).nHead;
                        int tail = Sim.map.way.get(w).nTail;

                        //List<Integer> keys = new ArrayList<Integer>();
                        //keys.add(head);
                        //keys.add(tail);
                        //keys.add(3);//テストのためJRに ToDo
                        List<Integer> keys = Arrays.asList(head, tail, j);//テストのためJR=3に ToDo
                        double length = Sim.map.way.get(Sim.map.nodes2way.get(keys)).length;//テストのため0に！　<-解除
                        edges[head].add(new Edge(head, tail, length));//from to
                        edges[tail].add(new Edge(tail, head, length));//to from 無向グラフのため
                        //System.out.println("SET "+length+", ("+head+", "+tail+")");
                    }
                }

                for (int nStart = 0; nStart < Sim.map.N; nStart++) {
                    for (int nEnd = 0; nEnd < Sim.map.N; nEnd++) {
                        fixed[nEnd] = false;//最短距離は未確定
                    }
                    Queue<Edge> q = new PriorityQueue<Edge>();
                    q.add(new Edge(nStart, nStart, 0)); //スタート地点を入れる
                    while (!q.isEmpty()) {
                        Edge e = q.poll();//最小距離のノードを取り出す
                        //System.out.println(e.len+", ("+e.src+", "+e.dst+")");
                        if (fixed[e.dst]) {
                            continue;
                        }
                        fixed[e.dst] = true;
                        for (Edge v : edges[e.dst]) {
                            if (!fixed[v.dst]) { //もし最短距離が未確定で
                                //System.out.println("!!!!!!!"+dist[0][nStart][e.dst]+" + "+v.len+" < "+dist[0][nStart][v.dst]);
                                if (dist[j][nStart][e.dst] + v.len < dist[j][nStart][v.dst]) { //かつ接続元＋先までの距離が現在記録されている距離より短ければ
                                    dist[j][nStart][v.dst] = dist[j][nStart][e.dst] + v.len;//更新
                                    pred[j][nStart][v.dst] = (int)e.dst;
                                    q.add(new Edge(e.dst, v.dst , dist[j][nStart][v.dst]));//ヒープに挿入
                                    // System.out.println("node: " +e.dst);
                                    // if(nStart==56){
                                    //  System.out.println("node: " +e.dst);
                                    // }
                                }
                            }
                        }
                    }
                }
            }
            /*
            //バスなどの場合
            if(j==7){//とりあえずバスに固定
                boolean[] fixed = new boolean[Sim.map.N];//最短距離が確定したかどうか
                List<Edge>[] edges = new List[Sim.map.N];
                for (int n = 0;n < Sim.map.N ;n++ ) {
                  edges[n]=new ArrayList<Edge>();
              }

                for(int nStart=0; nStart<Sim.map.N; nStart++){//distance初期化
                    for(int nEnd=0; nEnd<Sim.map.N; nEnd++){
                        dist[j][nStart][nEnd]=Sim.NOROUTE;
                        pred[j][nStart][nEnd]=nStart;
                    }
                    dist[j][nStart][nStart]=0;
                }
                for(Iterator<PTRoute> it = Sim.map.ptroute.iterator();it.hasNext();){
                for(int w= Sim.map.R;w<Sim.map.RW;w++){
                    int mom = Sim.map.way.get(w).mobilityType;
                    if(mom==j){
                        int head = Sim.map.way.get(w).nHead;
                        int tail = Sim.map.way.get(w).nTail;

                        //List<Integer> keys = new ArrayList<Integer>();
                        //keys.add(head);
                        //keys.add(tail);
                        //keys.add(3);//テストのためJRに ToDo
                        List<Integer> keys = Arrays.asList(head, tail, j);//テストのためJR=3に ToDo
                        double length = Sim.map.way.get(Sim.map.nodes2way.get(keys)).length;//テストのため0に！　<-解除
                        edges[head].add(new Edge(head, tail, length));//from to
                        edges[tail].add(new Edge(tail, head, length));//to from 無向グラフのため
              //System.out.println("SET "+length+", ("+head+", "+tail+")");
                    }
            }

                for(int nStart=0; nStart<Sim.map.N; nStart++){
                    for(int nEnd=0; nEnd<Sim.map.N; nEnd++){
                        fixed[nEnd] = false;//最短距離は未確定
                    }
                    Queue<Edge> q = new PriorityQueue<Edge>();
                    q.add(new Edge(nStart,nStart,0));//スタート地点を入れる
              while(!q.isEmpty()) {
                Edge e = q.poll();//最小距離のノードを取り出す
                //System.out.println(e.len+", ("+e.src+", "+e.dst+")");
                if(fixed[e.dst]){
                  continue;
                }
                fixed[e.dst] = true;
                for (Edge v :edges[e.dst]) {
                  if(!fixed[v.dst]){//もし最短距離が未確定で
                    //System.out.println("!!!!!!!"+dist[0][nStart][e.dst]+" + "+v.len+" < "+dist[0][nStart][v.dst]);
                    if(dist[j][nStart][e.dst] + v.len < dist[j][nStart][v.dst]){//かつ接続元＋先までの距離が現在記録されている距離より短ければ
                        dist[j][nStart][v.dst] = dist[j][nStart][e.dst] + v.len;//更新
                                pred[j][nStart][v.dst] = (int)e.dst;
                      q.add(new Edge(e.dst, v.dst , dist[j][nStart][v.dst]));//ヒープに挿入
                     // System.out.println("node: " +e.dst);
                     // if(nStart==56){
                     //     System.out.println("node: " +e.dst);
                     // }
                    }
                  }
                }
              }
                }
            }
            */



        }
    }






    public void  run() {
        System.out.println("Calculating Paths of Railways and Buses");
        //warshallFloydB();
        pqdijkstraTrak();
        //System.out.println("TEST " +dist[3][465][474] );
        for (int i = 0; i < Sim.I; i++) {
            if (i == 0) {
                System.out.println("Calculating Paths of Roads");
                //warshallFloyd();
                //System.out.println("TEST " +dist[3][465][474] );
                pqdijkstra();
                //System.out.println("TEST " +dist[3][465][474] );
            } else if (i % (Sim.I / Sim.F) == 0 && i <= Sim.I - (Sim.I / Sim.F)) {
                System.out.println("Recalculating Paths of Roads");
                trafficVolume(i - Sim.I / Sim.F, i - 1);
                System.out.println(i - Sim.I / Sim.F + 1 + "," + i);
                //warshallFloyd();
                pqdijkstra();
            }
            //System.out.println("i="+i);
            while (semaphore.getQueueLength() > 100) {
                try {
                    Thread.sleep(1000); //1秒Sleepする
                } catch (InterruptedException e) {}
            }
            Sim.info.inh[inh_shuffle[i]].start();
            //Sim.info.inh[i].start();
            //System.out.println("i="+inh_shuffle[i]);

            if ((i + 1) % (Sim.I / Sim.F) == 0 && i < Sim.I - (Sim.I / Sim.F) || i == Sim.I - 1) {
                for (int ii = i + 1 - Sim.I / Sim.F; ii <= i; ii++) {
                    try {
                        Sim.info.inh[inh_shuffle[ii]].join();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
            //System.out.println(i+"!!");
        }
        System.out.println("Final Recalculating Paths of Roads");
        trafficVolume(Sim.I / Sim.F * (Sim.F - 1), Sim.I - 1);
        System.out.println(Sim.I / Sim.F * (Sim.F - 1) + 1 + "," + Sim.I);
        //warshallFloyd();
        pqdijkstra();
        /*  for(int i=0; i<Sim.I; i++){
                try{
                    Sim.info.inh[i].join();
                }catch(InterruptedException e){
                    e.printStackTrace();
                }
            }*/
        System.out.println("All inhabitants END");
        //for(int i=0; i<Sim.I; i++){
        //this.inh[i].make_decisionString();
        //}
        /*
        if(Sim.I==1){
            trafficVolume(0,0);
        }
        if(Sim.F==1){
            trafficVolume(0,Sim.I-1);
        }
        trafficVolume(Sim.I/Sim.F*Sim.F, Sim.I-1);
        System.out.println((Sim.I/Sim.F*Sim.F)+","+(Sim.I-1));
        */
        try {
            File decisionfile = new File(Sim.agentDecisionfile);
            FileWriter filewriter = new FileWriter(decisionfile);
            for (int i = 0; i < Sim.I; i++) {
                //filewriter.write(inh[i].decisionString+"\n");
                filewriter.write((inh_shuffle[i] + 1) + " " + inh[inh_shuffle[i]].weight + "\n");
                filewriter.write(" " + (this.inh[inh_shuffle[i]].weight * this.inh[inh_shuffle[i]].reevaluate_value_of_tiredness() + (1 - this.inh[inh_shuffle[i]].weight) * this.inh[inh_shuffle[i]].reevaluate_value_of_cost()));
                filewriter.write(" " + inh[inh_shuffle[i]].decisionString + "\n");
            }
            filewriter.close();
        } catch (IOException e) {
            System.out.println(e);
        }


    }

    public int roadTrafficForward(int w) {
        int answer = 0;
        for (int j = 0; j < Sim.J; j++) {
            if (Sim.roadUsage[j] == 1) {
                answer += uSumForward[j][w];
            }
        }
        return answer;
    }
    public int roadTrafficBackward(int w) {
        int answer = 0;
        for (int j = 0; j < Sim.J; j++) {
            if (Sim.roadUsage[j] == 1) {
                answer += uSumBackward[j][w];
            }
        }
        return answer;
    }

    public double reevaluate_value_of_tiredness() {
        double answer = 0.0;
        for (int i = 0; i < Sim.I; i++) {
            answer += this.inh[i].reevaluate_value_of_tiredness();
        }
        return answer;
    }
    public double reevaluate_value_of_cost() {
        double answer = 0.0;
        for (int i = 0; i < Sim.I; i++) {
            answer += this.inh[i].reevaluate_value_of_cost();
        }
        return answer;
    }
    public double reevaluate_value() {
        double answer = 0.0;
        for (int i = 0; i < Sim.I; i++) {
            answer += this.inh[i].weight * this.inh[i].reevaluate_value_of_tiredness() + (1 - this.inh[i].weight) * this.inh[i].reevaluate_value_of_cost();
        }
        return answer;
    }
    public double reproduce_value_of_tiredness() {
        double answer = 0.0;
        for (int i = 0; i < Sim.I; i++) {
            answer += this.inh[i].reproduce_value_of_tiredness();
        }
        return answer;
    }
    public double reproduce_value_of_cost() {
        double answer = 0.0;
        for (int i = 0; i < Sim.I; i++) {
            answer += this.inh[i].reproduce_value_of_cost();
        }
        return answer;
    }
    public double reproduce_value() {
        double answer = 0.0;
        for (int i = 0; i < Sim.I; i++) {
            answer += this.inh[i].weight * this.inh[i].reproduce_value_of_tiredness() + (1 - this.inh[i].weight) * this.inh[i].reproduce_value_of_cost();
        }
        return answer;
    }
}

class Edge implements Comparable<Edge> { //
    public int src = 0;
    public int dst = 0;
    public double len = 0;

    public Edge(int src, int dst, double len) {
        this.src = src;
        this.dst = dst;
        this.len = len;
    }
    @Override
    public int compareTo(Edge o) {
        return (int)(this.len - o.len);
    }
}
