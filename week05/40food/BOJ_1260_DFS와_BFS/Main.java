package algo_study;

import java.util.*;

// 메모리: 39024KB
// 시간: 488ms

public class Main {

	static int n;
	static int m;
	static ArrayList<Integer>[] graph;

	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		n=sc.nextInt();
		m=sc.nextInt();
		int v=sc.nextInt();

		// 인접 리스트 방식으로 정리
		// 초기화
		graph=new ArrayList[n+1];
		for(int i=1;i<=n;i++){
			graph[i]=new ArrayList<>();
		}
		//간선 입력
		for(int i=0;i<m;i++){
			int a=sc.nextInt();
			int b=sc.nextInt();
			graph[a].add(b);
			graph[b].add(a);
		}

		//작은 순서로 정렬
		for(int i=1;i<=n;i++){
			graph[i].sort((a,b)->a-b);
		}

		//DFS
		visited=new boolean[n+1];
		count=0;
		dfs(v);

		System.out.println();

		//BFS
		visited=new boolean[n+1];
		count=0;
		bfs(v);
	}

	static boolean[] visited;
	static int count;
	public static void dfs(int v){
		visited[v]=true;
		count++;
		if(count==n) System.out.print(v);
		else System.out.print(v+" ");
		for(int next:graph[v]){
			if(!visited[next]) dfs(next);
		}
	}

	public static void bfs(int start){
		Queue<Integer> q=new ArrayDeque<>();
		q.add(start);
		visited[start]=true;
		while(!q.isEmpty()){
			int v=q.poll();
			count++;
			if(count==n) System.out.print(v);
			else System.out.print(v+" ");
			for(int next:graph[v]){
				if(!visited[next]){
					visited[next]=true;
					q.add(next);
				}
			}
		}
	}
}
