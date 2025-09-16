package algo_study;

import java.util.Scanner;

public class Main{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		
		for(int tc=0;tc<t;tc++) {
			int n=sc.nextInt();
			String s=sc.next();
			String[] sArray=s.split("");
			for(int i=0;i<sArray.length;i++) {
				System.out.print(sArray[i].repeat(n));
			}
			System.out.println();
		}
    }
}