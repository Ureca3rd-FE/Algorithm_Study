import java.util.Scanner;
import java.util.Stack;

public class Main{
    public static int DFS(int[][] dfs, boolean[] visit, int first)
    {
        Stack<Integer> stack = new Stack<>();
        stack.push(first);
        int count = 0;

        while(!stack.isEmpty())
        {
            int node = stack.pop();
            if(!visit[node])
            {
                visit[node] = true;
                count++;
                for(int i = 0 ; i <= dfs.length - 1; i++ )
                {
                    if(dfs[node][i] == 1 && !visit[i])
                    {
                        stack.push(i);
                    }
                }
            }
        }
        return count - 1;
    }
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int e = in.nextInt();
        int first = 0;

        int[][] dfs = new int[n + 1][n + 1];
        boolean[] visit = new boolean[n + 1];

        for(int i = 0; i < e; i++)
        {
            int a = in.nextInt();
            int z = in.nextInt();

            dfs[a][z] = 1;
            dfs[z][a] = 1;
        }

        System.out.println(DFS(dfs, visit, 1));
    }
}