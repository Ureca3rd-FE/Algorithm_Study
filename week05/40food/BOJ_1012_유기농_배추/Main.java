package algo_study;

import java.util.*;

// 메모리: 31160KB
// 시간: 312ms

public class Main {

	static int m; //가로 길이
	static int n; //세로 길이
	static int k; //배추가 심어진 위치 개수

	static int[][] map;
	static boolean[][] visited;
	static int[] dr={-1,0,1,0};
	static int[] dc={0,-1,0,1};

	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		for(int tc=0;tc<t;tc++){
			//초기화
			m=sc.nextInt(); //가로
			n=sc.nextInt(); //세로
			k=sc.nextInt();
			map=new int[n][m]; //세로 가로
			visited=new boolean[n][m];
			for(int i=0;i<k;i++){
				//가로와 세로를 주니까 map[가로][세로]여도 옆으로 돌렸단 느낌으로 ㄱㅊ을듯
				int x=sc.nextInt();
				int y=sc.nextInt();
				map[y][x]=1;
			}

			int count=0; //연결 요소의 수
			for(int i=0;i<n;i++){ //세로=y
				for(int j=0;j<m;j++){ //가로=x
					if(map[i][j]==1&&!visited[i][j]){
						//배추가 심어져있는 곳에서! 방문한 적이 없다면
						dfs(i,j); //파고들면서 인접한 곳 방문 완료 처리
						count++; //count 증가시켜 한 연결 요소 완료 확인
					}
				}
			}
			System.out.println(count);
		}
	}

	static void dfs(int y, int x){//가로세로
		visited[y][x]=true;
		//4방면 확인
		for(int d=0;d<4;d++){
			int ny=y+dc[d];
			int nx=x+dr[d];
			if(nx>=0&&ny>=0&&nx<m&&ny<n){//경계값 체크
				//배추가 심어져있고 방문한 적이 없으면 방문해서 방문체크
				if(map[ny][nx]==1&&!visited[ny][nx]) dfs(ny,nx);
			}
		}
	}
}
