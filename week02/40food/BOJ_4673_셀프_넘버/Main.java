package algo_study;

import java.util.ArrayList;

public class Main {
	static ArrayList<Integer> selfnums;
	
	public static void main(String args[]) {
		selfnums=new ArrayList<>();
		
		for(int i=1;i<10000;i++) {
			selfnums.add(i);
		}
		
		for(int i=1; i<10000; i++) {
			int sum=i;
			String[] sArray=new StringBuilder().append(i).toString().split("");
			for(String s:sArray) {
				sum+=Integer.parseInt(s);
			}
			selfnums.remove((Integer)sum);
		}
		
		for(int i=0;i<selfnums.size();i++) {
			System.out.println(selfnums.get(i));
		}
	}
}
