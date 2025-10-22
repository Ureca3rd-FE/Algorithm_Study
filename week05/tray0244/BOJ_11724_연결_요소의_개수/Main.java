import java.util.*;
import java.io.*;

public class Main{
    static int count = 0;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int[][] graph = new int[N][N];
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());

            graph[u - 1][v - 1] = 1;
            graph[v - 1][u - 1] = 1;
        }
        boolean[] visited = new boolean[N];
        for (int i = 0; i < N; i++) {
            if (!visited[i]) {
                dfs(graph, visited, i, N);
                count++;
            }
        }
        System.out.println(count);
    }
    static void dfs(int[][] graph, boolean[] visited, int node, int N) {
        visited[node] = true;
        for (int i = 0; i < N; i++) {
            if (graph[node][i] == 1 && !visited[i]) {
                dfs(graph, visited, i, N);
            }
        }
    }
}