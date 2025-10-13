package algo_study;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Stack;

public class Main {

	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int[] compares=new int[n];
		for(int i=0;i<n;i++){
			compares[i]=sc.nextInt();
		}

		Stack<Integer> s=new Stack<>();
		ArrayList<String> command=new ArrayList<>();
		boolean ok=true;

		int count=0; //나온 수열 수
		int crt=0; //stack에 들어갈 수
		while(count<n){
			//peek 확인->compare와 같으면 pop
			if(!s.empty()&&s.peek()==compares[count]){
				count++;
				s.pop();
				command.add("-");
			}
			//peek 확인->compare보다 크면 break, NO 출력
			else if(!s.empty()&&s.peek()>compares[count]) {
				ok = false;
				break;
			}
			//stack이 비었거나 peek가 compare보다 작으면 add
			else{
				crt++;
				s.add(crt);
				command.add("+");
			}
		}

		if(ok){
			for(String c:command){
				System.out.println(c);
			}
		}else{
			System.out.println("NO");
		}
	}
}
