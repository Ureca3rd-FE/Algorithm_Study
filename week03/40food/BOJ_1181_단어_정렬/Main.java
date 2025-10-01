package algo_study;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		ArrayList<String> list=new ArrayList<>();
		for(int i=0;i<n;i++) {
			String t=sc.next();
			if(!list.contains(t))list.add(t);
		}
		list.sort((a,b)->{
			if(a.length()==b.length())return a.compareTo(b);
			else return a.length()-b.length();
		});
		for(String t:list) {
			System.out.println(t);			
		}
	}
}

