import java.util.*;

public class Main {
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();

		Deque<Integer> q=new ArrayDeque<>();
		for(int i=0;i<n;i++){
			String command=sc.next();
			switch(command){
				case "push_front":
					q.addFirst(sc.nextInt());
					break;
				case "push_back":
					q.addLast(sc.nextInt());
					break;
				case "pop_front":
					System.out.println(q.isEmpty()?-1:q.pollFirst());
					break;
				case "pop_back":
					System.out.println(q.isEmpty()?-1:q.pollLast());
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
