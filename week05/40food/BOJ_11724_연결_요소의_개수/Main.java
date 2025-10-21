package algo_study;

import java.util.*;

// 메모리: 310324KB
// 시간: 1364ms

public class Main {

	static int n;
	static int m;
	static int[] parent;

	public static int find(int x){
		if(parent[x]==x)return x;
		return parent[x]=find(parent[x]);
	}
	public static void union(int a, int b){
		int roota=find(a);
		int rootb=find(b);
		if(roota!=rootb)parent[rootb]=roota;
	}

	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		n=sc.nextInt();
		m=sc.nextInt();

		// 서로소 집합으로 풀면 될 것 같음
		parent=new int[n+1];
		for(int i=1;i<=n;i++) parent[i]=i;
		for(int i=0;i<m;i++){
			int a=sc.nextInt();
			int b=sc.nextInt();
			union(a,b);
		}
		HashSet<Integer> set=new HashSet<>();
		for(int i=1;i<=n;i++){
			set.add(find(i));
		}
		System.out.println(set.size());
	}
}
