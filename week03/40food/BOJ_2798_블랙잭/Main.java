package algo_study;

import java.util.Scanner;

public class Main {
	
	static int[] cards;
	static int m;
	static int max;
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		cards=new int[n];
		m=sc.nextInt();
		max=0;
		for(int i=0;i<n;i++) {
			cards[i]=sc.nextInt();
		}
		
		// 순열, 조합, 부분집합 중 조합 문제
		combi(0,0,0);
		System.out.println(max);
	}
	
	//조합이니까 종료 조건 depth, 시작 위치 start, 더한 값 sum
	public static void combi(int depth,int start,int sum) {
		if(depth==3) {
			if(sum<=m && sum>max) max=sum;
			return;
		}
		for(int i=start;i<cards.length;i++) {
			combi(depth+1,i+1,sum+cards[i]);
			//start가 아니라 i+1을 넣어야함. start+1을 넣으면 i가 제대로 선택되지 않음
		}
	}
}
