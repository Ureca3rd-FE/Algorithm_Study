package algo_study;

import java.util.Scanner;

public class Main{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		String[] s=sc.next().split("");
		int total=0;
		for(int i=0;i<n;i++) {
			total+=Integer.parseInt(s[i]);
		}
		System.out.println(total);
	}
}