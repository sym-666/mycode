function selectionSort(arr: number[])
{
    const l=arr.length;
    let min:number=arr[0];
    let minIndex:number=0;
    
    for (let j=0;j<l-1;j++)
    {
    for(let i=j;i<l-1;i++)
    {if (arr[i]<min)
        {
            min=arr[i];
            minIndex=i;
        }
    }
    const temp=arr[j];
    arr[j]=arr[minIndex];
    arr[minIndex]=temp;
    min=arr[j+1];
    }

}
const arr=[3,2,1,4,5];
selectionSort(arr);
console.log(arr);