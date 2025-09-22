package algo_study;

import java.util.Scanner;

public class Main {
	
	/* 이렇게 풀긴 했지만 배열을 써서 직관적으로 구현하는 게 더 나음
	 * f[0]=0, f[1]=1, f[2]=1, f[3]=2 ...
	 * 이러고 n번째에 있는 거 가져오게 하면 if(n==0) 없어도 됨
	 * */
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int prev=0;
		int result=1;
		
		if(n==0) System.out.println(0);
		else {
			//1번째에서 시작하니 다음 연산은 2번째부터
			for(int i=2;i<=n;i++) {
				int temp=result;
				result+=prev;
				prev=temp;
			}
			
			System.out.println(result);
		}
	}
}
