package week03.BOJ_1181_단어정렬;

import java.util.*;
import java.io.*;

public class Main{
    private static void str_sort(String str){

    }
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        Set<String> set = new HashSet<>();


        for(int i = 0; i < N; i++){
            set.add(br.readLine());
        }
        List<String> words = new ArrayList<>(set);


        // 정렬 조건 적용
        words.sort((a, b) -> {
            if(a.length() != b.length()){
                return a.length() - b.length();
            } else{
                return a.compareTo(b);
            }
        });
        for(String word: words){
            sb.append(word).append('\n');
        }
        System.out.print(sb);
    }
}