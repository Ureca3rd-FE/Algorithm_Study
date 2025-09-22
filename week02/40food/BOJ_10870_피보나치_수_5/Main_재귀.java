package algo_study;

import java.util.ArrayList;
import java.util.Scanner;

public class Main_재귀 {
	
	//재귀 호출로 인해 StackOverFlow 발생하는 것으로 보임
	
	static int prev;
	static int n;
	static int result;
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		n=sc.nextInt();
		prev=0;
		result=1;
		
		//시작 숫자 제외 1번째부터 시작
		fibo(1);
		System.out.println(result);
	}

	private static void fibo(int depth) {
		if(depth==n) return;
		
		int temp=result;
		result+=prev;
		prev=temp;
		
		fibo(depth+1);
	}
}
