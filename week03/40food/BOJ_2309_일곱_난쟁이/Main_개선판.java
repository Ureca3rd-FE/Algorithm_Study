package algo_study;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
	
	static int[] height;
	static int[] kids;
	static boolean ok; //재귀 종료용 flag
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		//9줄에 걸쳐 난쟁이들의 키가 주어짐. 난쟁이 키 배열 초기화.
		height=new int [9];
		kids=new int [7];
		for(int i=0;i<9;i++) {
			height[i]=sc.nextInt();
		}
		
		/* 순서가 중요한가? no -> 순열은 아님
		 * 선택할 n이 바뀔 수 있는가? no -> 부분 집합도 아님
		 * 브루트포스 중에서도 조합으로 푸는 문제
		 * */
		
		combi(0,0,0);
	}
	
	/* 순서가 중요하면 for문을 0부터 돌려야겠지만 이건 조합이라 depth부터 돌리면 될듯
	 * 
	 * 기가막히게 조합 푸는 법 까먹음
	 * 1. depth, start, +@ 전달
	 * 2. start부터 height 길이까지 돌리며 조합한다
	 * 
	 * depth는 왜 안되나?
	 * ㄴ depth는 7까지만 가기때문에 for문 조건에 들어갈 수 없음
	 * */
	
	public static void combi(int depth, int start, int sum) {
		if(depth==7) {
			if(sum==100) {
				ok=true;
				Arrays.sort(kids);
				for(int i:kids)
				System.out.println(i);
			}
			return;
		}
		
		for(int i=start;i<height.length;i++) {
			if(ok) break;
			kids[depth]=height[i];
			combi(depth+1,i+1,sum+height[i]); //i는 선택했으니 i+1부터
		}
	}
}
