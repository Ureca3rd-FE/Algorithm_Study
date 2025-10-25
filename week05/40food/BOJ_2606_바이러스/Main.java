package algo_study;

import java.util.*;

// 메모리: 18060KB
// 시간: 192ms

public class Main {

	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt(); //컴퓨터 수
		int m=sc.nextInt(); //연결된 컴퓨터 쌍 수
		visited=new boolean[n+1];
		graph= new ArrayList[n+1];
		for(int i=1;i<=n;i++){
			graph[i]=new ArrayList<>();
		}
		for(int i=0;i<m;i++){
			int a=sc.nextInt();
			int b=sc.nextInt();
			graph[a].add(b);
			graph[b].add(a);
		}
		count=0;
		dfs(1);
		count--; //1로 올라간 거
		System.out.println(count);
	}

	static int count;
	static ArrayList<Integer>[] graph;
	static boolean[] visited;

	static void dfs(int d){
		visited[d]=true;
		count++;
		for(int next:graph[d]){
			//next node 방문한 적 없으면 dfs
			if(!visited[next]) dfs(next);
		}
	}
}
