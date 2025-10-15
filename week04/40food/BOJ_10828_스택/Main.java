package algo_study;

import java.util.Scanner;
import java.util.Stack;

public class Main {

	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();

		Stack<Integer> s=new Stack<>();
		for(int i=0;i<n;i++){
			String command=sc.next();
			switch(command){
				case "push":
					s.add(sc.nextInt());
					break;
				case "pop":
					System.out.println(s.empty()?-1:s.pop());
					break;
				case "size":
					System.out.println(s.size());
					break;
				case "empty":
					System.out.println(s.empty()?1:0);
					break;
				case "top":
					System.out.println(s.empty()?-1:s.peek());
					break;
				default: break;
			}
		}
	}
}
