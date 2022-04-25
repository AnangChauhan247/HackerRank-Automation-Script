module.exports={
    answers:[
        `
        #include<bits/stdc++.h>
        using namespace std;

        int main()
        {
            int no;
            cin>>no;
            vector<int>array(no);
            int sum=0;
            for(int i=0; i<no; i++)
            {
                cin>>array[i];
                sum+=array[i];
            }
            cout<<sum<<endl;
            return 0;
        }
        `,
        `
        #include<bits/stdc++.h>
        using namespace std;
        vector<int>compareTriplets(vector<int>a,vector<int>b)
        {
            int alice=0;
            int bob=0;
            vector<int>answer(2);
            for(int i=0; i<3; i++)
            {
                if(a[i]>b[i]) alice++;
                else if(a[i]<b[i]) bob++;
            }
            answer[0]=alice;
            answer[1]=bob;
            return answer;
        }
        int main()
        {
            vector<int>a(3);
            for(int i=0; i<3; i++)
            {
                int n;
                cin>>n;
                a[i]=n;
            }
            
            vector<int>b(3);
            for(int i=0; i<3; i++)
            {
                int n;
                cin>>n;
                b[i]=n;
            }
            vector<int>result(2);
            result=compareTriplets(a,b);
            for(int i=0; i<2; i++)
            {
                cout<<result[i]<<" ";
            }
            return 0;
        }
        `

    ]
}