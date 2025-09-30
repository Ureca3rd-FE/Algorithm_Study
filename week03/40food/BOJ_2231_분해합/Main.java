package algo_study;

import java.util.Scanner;

public class Main {
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		
		int result=0;
		for(int i=1;i<n;i++) {
			int temp=0;
			String[] array=new StringBuilder().append(i).toString().split("");
			for(String s:array) {
				temp+=Integer.parseInt(s);
			}
			if(temp+i==n) {
				result=i;
				break;
			}
		}
		System.out.println(result);
	}
}
