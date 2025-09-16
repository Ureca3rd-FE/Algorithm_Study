package algo_study;

import java.util.Scanner;

public class Main{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		int max=Integer.MIN_VALUE;
		int min=Integer.MAX_VALUE;
		
		for(int i=0;i<t;i++) {
			int num=sc.nextInt();
			if(num>max) max=num;
			if(num<min) min=num;
		}
		
		System.out.printf("%d %d",min,max);
    }
}