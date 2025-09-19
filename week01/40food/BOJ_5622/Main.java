package algo_study;

import java.util.Scanner;

public class Main{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		char[] c=sc.next().toCharArray();
		int total=0;
		for(int i=0;i<c.length;i++) {
			total+=mapping(c[i]);
		}
		System.out.println(total);
	}
	
	public static int mapping(char c) {
		//3으로 나눈 몫으로 계산할랬는데 알파벳 4개에 해당하는 경우가 있음
		int temp=c-'A';
		if(temp>=0&&temp<=2) return 3; 
		else if(temp>=3&&temp<=5) return 4; 
		else if(temp>=6&&temp<=8) return 5; 
		else if(temp>=9&&temp<=11)return 6; 
		else if(temp>=12&&temp<=14)return 7; 
		else if(temp>=15&&temp<=18)return 8; 
		else if(temp>=19&&temp<=21)return 9; 
		else return 10;
	}
}