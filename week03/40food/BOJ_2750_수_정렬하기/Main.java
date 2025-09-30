package algo_study;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int[] nums=new int[n];
		for(int i=0;i<n;i++) {
			nums[i]=sc.nextInt();
		}
		Arrays.sort(nums);
		for(int num:nums) {
			System.out.println(num);			
		}
	}
}
