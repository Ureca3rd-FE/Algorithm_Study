import java.util.*;

public class Main {
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();

		Deque<Integer> q=new ArrayDeque<>();
		for(int i=0;i<n;i++){
			String command=sc.next();
			switch(command){
				case "push":
					q.add(sc.nextInt());
					break;
				case "pop":
					System.out.println(q.isEmpty()?-1:q.poll());
					break;
				case "size":
					System.out.println(q.size());
					break;
				case "empty":
					System.out.println(q.isEmpty()?1:0);
					break;
				case "front":
					System.out.println(q.isEmpty()?-1:q.peekFirst());
					break;
				case "back":
					System.out.println(q.isEmpty()?-1:q.peekLast());
					break;
				default: break;
			}
		}
	}
}
