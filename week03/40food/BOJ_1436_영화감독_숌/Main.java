package algo_study;

import java.util.Scanner;

public class Main {
	
	static int n;
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		n=sc.nextInt();
		
		/* 처음엔 그냥 앞과 뒤를 분리하고 각자 숫자를 올린 뒤
		 * 그걸 다시 붙여가며 만들어가려고 했는데
		 * 이렇게 하면 back이 없는 경우, front가 없는 경우 등 따져야할 게 많아지고
		 * 자릿수별로 따로 생각해야 한다.
		 * 이렇게 푸는 건 아닌 것 같아 찾아보았고 더 간단한 방법을 찾았다.
		 * */
		
		int result=0;
		int count=0;
		while(count<n) {
			String s=new StringBuilder().append(++result).toString();
			if(s.contains("666")) count++;
		}
		
		System.out.println(result);
	}
}

