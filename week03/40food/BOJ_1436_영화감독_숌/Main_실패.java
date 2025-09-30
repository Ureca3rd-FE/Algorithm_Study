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
		
		String result="666";
		int front=0;
		int back=0;
		for(int i=1;i<n;i++) {
			String s1; String s2;
			//back이 없던 경우
			if(i<7) s1=new StringBuilder().append(front+1).append(666).toString();
			//1. 앞이 늘어나는 경우
			else s1=new StringBuilder().append(front+1).append(666).append(back).toString();
			//2. 뒤가 늘어나는 경우
			s2=new StringBuilder().append(front).append(666).append(back+1).toString();
			
			//result보다 큰 것 중 가장 작은 것으로 result 갱신
			if(s1.compareTo(s2)==1) {
				result=s1;
				front++;
			}
			else {
				result=s2;
				back++;
			}
		}
		
		System.out.println(result);
	}
}

