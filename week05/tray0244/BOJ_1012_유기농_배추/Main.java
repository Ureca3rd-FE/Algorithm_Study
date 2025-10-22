import java.util.*;

public class Main{
    static int[][] dfs;
    static boolean[][] visit;
    static int[] dx = {0, 0, -1, 1};
    static int[] dy = {-1, 1, 0, 0};
    static int N, M;

    public static void DFS(int x, int y)
    {
        visit[x][y] = true;

        for(int i = 0; i < 4; i++)
        {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx >= 0 && ny >= 0 && nx < N && ny < M)
            {
                if(dfs[nx][ny] == 1 && !visit[nx][ny])
                {
                    DFS(nx, ny);
                }
            }
        }
    }

    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);

        int T = in.nextInt();

        while (T-- > 0)
        {
            M = in.nextInt();
            N = in.nextInt();
            int K = in.nextInt();

            dfs = new int[N][M];
            visit = new boolean[N][M];

            for(int i = 0; i < K; i++)
            {
                int y = in.nextInt();
                int x = in.nextInt();
                dfs[x][y] = 1;
            }
            int count = 0;
            for(int i = 0; i < N; i++)
            {
                for(int j = 0; j < M; j++)
                    if(dfs[i][j] == 1 && !visit[i][j])
                    {
                        DFS(i, j);
                        count++;
                    }
            }
            System.out.println(count);
        }
    }
}