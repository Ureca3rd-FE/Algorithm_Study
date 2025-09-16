package algo_study;

import java.util.Scanner;

public class Main{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		
		String num1=sc.next();
		int value1=value(num1.split(""));
		
		String num2=sc.next();
		int value2=value(num2.split(""));
		
		if(value1>value2) System.out.println(value1);
		else System.out.println(value2);
    }
	
	public static int value(String[] s) {
		String temp=s[0];
		s[0]=s[2];
		s[2]=temp;
		return Integer.parseInt(s[0]+s[1]+s[2]);
	}
}