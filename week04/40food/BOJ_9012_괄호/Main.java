package algo_study;

import java.util.*;

public class Main {
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		for(int tc=0;tc<n;tc++){
			String string=sc.next();
			Stack<String> s=new Stack<>();
			boolean ok=true;
			for(String c:string.split("")) {
				//stack 삽입
				if(c.equals("(")) s.add(c);
				//짝 없이 ) 남는 경우
				else if(c.equals(")")&&s.empty()) {
					ok=false;
					break;
				}
				//stack 삭제
				else s.pop();
			}
			//(가 남았거나 짝 없는 )이 있으면 NO
			if(ok&&s.isEmpty()) System.out.println("YES");
			else System.out.println("NO");
		}
	}
}
