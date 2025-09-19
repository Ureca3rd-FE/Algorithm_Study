package algo_study;

import java.util.Scanner;

public class Main{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		String t=sc.nextLine();
		String[] s=t.split(" ");
		
		int count=0;
		for(String words:s) {
			if(!words.isEmpty())count++;
		}
		
		System.out.println(count);
    }
}