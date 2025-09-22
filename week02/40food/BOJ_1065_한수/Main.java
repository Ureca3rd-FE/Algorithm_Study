package algo_study;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		
		/* 1. 수를 받아 String 배열로 만든다.
		 * 2. String 배열을 integer로 parse하여 int 배열로 만든다.
		 * 3. int 배열을 돌면서 두 수의 차이가 같은지 확인한다.
		 * 4. 같으면 count 증가
		 * */
		
		int count=0;
		for(int i=1;i<=n;i++) {
			if(hansu(i)) count++;
		}
		System.out.println(count);
	}
	
	public static boolean hansu(int n) {
		String[] sArray=new StringBuilder().append(n).toString().split("");
		int[] nums=new int[sArray.length];
		if(nums.length==1) return true;
		int index=0;
		for(String s:sArray) {
			nums[index]=Integer.parseInt(s);
			index++;
		}
		int r=nums[1]-nums[0];
		for(int i=1;i<nums.length;i++) {
			if(nums[i]-nums[i-1]!=r)return false;
		}
		return true;
	}
}
