import java.util.*;

public class Main
{
    public static void DFS(int[][] graph,boolean[] visit, int V)
    {
        System.out.print(V + " ");
        visit[V] = true;
        for(int i = 1; i < graph.length; i++)
        {
            if(graph[V][i] == 1 && !visit[i])
            {
                DFS(graph, visit, i);
            }
        }
    }
    public static void BFS(int[][] graph,boolean[] visit, int V)
    {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(V);
        visit[V] = true;

        while(!queue.isEmpty())
        {
            int node = queue.poll();
            System.out.print(node + " ");

            for(int i = 1; i < graph.length; i++)
            {
                if(graph[node][i] == 1 && !visit[i])
                {
                    queue.add(i);
                    visit[i] = true;
                }
            }
        }

    }
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);

        int N = in.nextInt();
        int M = in.nextInt();
        int V = in.nextInt();

        boolean[] visit = new boolean[N + 1];
        int[][] graph = new int[N + 1][N + 1];

        for(int i = 0; i < M; i++)
        {
            int a = in.nextInt();
            int z = in.nextInt();

            graph[a][z] = 1;
            graph[z][a] = 1;
        }
        DFS(graph, Arrays.copyOf(visit, visit.length), V);
        System.out.println();
        BFS(graph, Arrays.copyOf(visit, visit.length), V);
    }
}