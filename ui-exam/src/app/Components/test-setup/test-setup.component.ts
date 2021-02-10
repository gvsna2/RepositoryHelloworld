import { Component, OnInit,AfterViewInit,ViewChild,ElementRef} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { TreeNode, TreeModel, ITreeOptions,TREE_ACTIONS,KEYS, IActionMapping } from 'angular-tree-component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-test-setup',
  templateUrl: './test-setup.component.html',
  styleUrls: ['./test-setup.component.css']
})
export class TestSetupComponent implements OnInit,AfterViewInit {
  @BlockUI() blockUI: NgBlockUI;
  routeId=0;
  constructor(private apiService : AllServicesService,private router:Router,private activeRoute: ActivatedRoute) {

    this.activeRoute.params.subscribe(params=>{
      if(params['id']){
        this.routeId = params['id'];

      }
    })

    
 this.nodes = [
    {
      id: 1,
      name: 'root1',
      type:1,
      children: [
        { id: 2, name: 'child1',type:2, },
        { id: 3, name: 'child2',type:2, hasChildren: true }
      ]
    },
    {
      id: 4,
      name: 'root2',
      type:1,
      children: [
        { id: 5, name: 'child2.1',type:2 },
        {
          id: 6,
          name: 'child2.2',
          type:2,
          children: [
            { id: 7, name: 'subsub',type:3 }
          ]
        }
      ]
    }
  ];
   }
  token=localStorage.getItem('token')
 
 options: ITreeOptions = {
    getChildren: this.getChildren.bind(this),
    useCheckbox: false
  };

  nodes: any[] = [];

  asyncChildren = [
    
  ];

  //  getChildren(node: any) {
  //   const newNodes = this.asyncChildren.map((c) => Object.assign({}, c));

  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(newNodes), 1000);
  //   });
  // }

  newNodes;
  getChildren(node: any) {
    // this.samp(node);
    
    let promise = new Promise((resolve, reject) => {
    var response;
      this.apiService.getAll("testmanagement/testsetup/gettestconfigdetails?token="+this.token+"&id="+node.data.id+"&type="+node.data.type)
    .toPromise()
    .then(
    res => { // Success
      response=res;
    this.asyncChildren= response.children;
    this.newNodes = this.asyncChildren.map((c) => Object.assign({}, c));
    // this.results = res.json().results;
    resolve(this.newNodes);
    
    },
    msg => { // Error
    reject(msg);
    }
    );
    });
    return promise;
    }

 
    flag=0;

    handleKeyDown(event){
      // console.log(event.code);
      if(event.code=="Enter"){
      //  this.addNode(tree,node,sub,2):temp=0
      }
    }

    @ViewChild('auto',{static:true}) auto;


    hideInput(){

      if(this.flag!=0){
        // console.log(this.flag);
        this.flag=0;
        
      }
    }
    questionCount=0;
    inputCleared(){
       
if(this.testSetupId!=0 ){
  Swal.fire({
    title: 'Are you sure?',
    text: "This will delete changes made on category",
    icon: 'error',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Proceed!'
  }).then((result) => {
    if (result.value) {
      this.categoryFlag=false;
      this.testSetupId=0;
      this.selectedCategory=0;
      this.editFlag=false;
    }
    else{
     
      this.selectedName=this.categoryList[0].name;
      // console.log();
       
      
      
    }
  })
 
}
      
    }
    addNode(tree:any,node:any,value,type) {

     // // console.log(event);
      // var result = this.getCurrentNode(this.nodes, 12);
    //  // console.log("event");
    tree.treeModel.getNodeById(node.data.id)
      .setActiveAndVisible();
    tree.treeModel.focusDrillDown();
    var response;
    var url;
    if(type==2){
      url="testmanagement/testsetup/createsubcategory?token="+this.token+"&id="+node.data.id+"&type="+node.data.type+"&testSubcategoryName="+encodeURIComponent(value)+"&isEdit="+this.routeId;
    }else{
      url="testmanagement/testsetup/createsection?token="+this.token+"&id="+node.data.id+"&type="+node.data.type+"&testSectionName="+encodeURIComponent(value)+"&isEdit="+this.routeId;
      
    }
      this.apiService.postData(url,{ })
      .subscribe(res=>{
        response=res;
        if(response.statusCode==1){
      
          if(node.data.children){
            node.data.children.push(response.item) ;
            this.flag=0;
            tree.treeModel.update();
            tree.treeModel.focusDrillDown();
             }else{
              let promise = new Promise((resolve, reject) => {
                resolve(this.getChildren(node));
              }).then(
                res=>{
                  // console.log(res);
                  node.data.children=res ;
                  this.flag=0;
                  tree.treeModel.update();
                  tree.treeModel.focusDrillDown();
                  //tree.treeModel.collapseAll()
                }
              );
             //  this.getChildren(node);
             
      
             }
            
        this.apiService.successAlert(response.statusMessage);
         
          
         }else{
        this.apiService.errorAlert(response.statusMessage);

           // console.log(response);
         }
      },error=>{
        
      },
      ()=>{
       
      });
      
      // node.data.children.push({id: 5, name: 'child2.1',type:2,children:[]}) ;
      // tree.treeModel.update();
    }
    // deleteNode(tree:any,node:any){

    //   node.parent.data.children.forEach(function (element, index) {
    //     if(element.id==node.data.id){
    //       node.parent.data.children.splice(index,1);
    //       tree.treeModel.update();
    //       // console.log(index);
    //     }
    //   });
      
    //  // // console.log(node);
    // }




    deleteNode(tree:any,node:any){
      var response;
      //// console.log(node.realParent.data);
      



      
      this.apiService.postData("testmanagement/testsetup/removetestsetupconfig?token="+this.token+"&id="+node.data.id+"&type="+node.data.type,{ })
      .subscribe(res=>{
        response=res;
        // console.log(node);
        if(response.statusCode==1){
          var arr=node.realParent.data.children;
      arr.forEach(function (element, index) {
        if(element.id==node.data.id){
         // // console.log(node.realParent);
          arr.splice(index,1);
         //node.realParent.data.children.splice(index,1);
          tree.treeModel.update();
         // // console.log(res);
           

        }else{
          
          tree.treeModel.update();

        }
       
      });
      this.apiService.successAlert(response.statusMessage);
        }
        else{
          this.apiService.errorAlert(response.statusMessage);
        }
      },
        error=>{
          // console.log(error);
        }
      );
      
     
     
    }

    // glob_val=0;
    // getCurrentNode(source, id) {
    //     this.glob_val++;
         
    //     // // console.log("get Node"+this.glob_val+">>>>"+id);
    //     let key;
    //     for (key in source) {
    //         var item = source[key];
    //         if (item.id == id)
    //             return item;

    //         if (item.children && item.id!=3) {
    //             var subresult = this.getCurrentNode(item.children, id);
    //             if (subresult)
    //                 return subresult;
    //         }
    //     }
    //     return null;
    // }

  // nodes = [
  //   {
  //     id: 1,
  //     name: 'root1',
  //     type:1,
  //     children: [
  //       { id: 2, name: 'child1',type:2 },
  //       { id: 3, name: 'child2',type:2 }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     name: 'root2',
  //     type:1,
  //     children: [
  //       { id: 5, name: 'child2.1',type:2 },
  //       {
  //         id: 6,
  //         name: 'child2.2',
  //         type:2,
  //         children: [
  //           { id: 7, name: 'subsub',type:3 }
  //         ]
  //       }
  //     ]
  //   }
  // ];
 
  keyword = 'name';
  data = [
      
  ];
  notFound2="<a>Create New </a>";
  test(){
    // console.log("testing");
  }
 selectedCategory=0;
 selectedName="";
 selectedNameForClear="";

  selectEvent(item,value) {
    // do something with selected item
   
    
    // console.log(item);
    
    this.selectedCategory=item.id;
    this.selectedNameForClear=item.name;
    this.getCategory(value);

  }
 
  searchString;
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    this.searchString=val;
    if(document.getElementById('test')!=null){
      // console.log("test");
      document.getElementById('test').onclick = function() {
        // console.log("testing");
     }
    }
   
  }


  //  getChildren(node: any) {
  //               // this.samp(node);
                
  //               let promise = new Promise((resolve, reject) => {
                
  //               this.profile.getKeywords(node.data.itemId,node.data.typeId)
  //               .toPromise()
  //               .then(
  //               res => { // Success
  //               this.asyncChildren= res["list"];
  //               this.newNodes = this.asyncChildren.map((c) => Object.assign({}, c));
  //               // this.results = res.json().results;
  //               resolve(this.newNodes);
  //               },
  //               msg => { // Error
  //               reject(msg);
  //               }
  //               );
  //               });
  //               return promise;
  //               }



  categoryList;
  testSetupId=0;
  categoryFlag=false;

  next(){
    if(this.testSetupId!=0){
      this.router.navigate(["/sections",this.testSetupId])
    }else{
      this.apiService.errorAlert("All fields are Manditory");
    }
    
  }
  getCategory(loginForm){
      
  // console.log();
  if(loginForm.testSetupTitle){

  }else{
    loginForm.testSetupTitle =''
  }
    if(loginForm.testSetupTitle !="" && this.selectedCategory!=0){
      this.blockUI.start('Loading ..');
      //var queryString = Object.keys(loginForm).map(key => key + '=' + loginForm[key]).join('&');
    
//      const formdata: FormData = new FormData();
// formdata.append('testSetupTitle', loginForm.testSetupTitle);
// formdata.append('testComplexityId', loginForm.testComplexityId);
// formdata.append('testSetupId', loginForm.testSetupId);
//     formdata.append('testCategoryId', this.selectedCategory);
// console.log(loginForm.testSetupTitle)
 var data = {
      'testSetupRequestDTO' : {
         "testSetupTitle": loginForm.testSetupTitle,
        "testCategoryId": this.selectedCategory,
        // "testComplexityId": loginForm.testComplexityId,
       "testSetupId":this.testSetupId,
        // "testTypeId": loginForm.testTypeId,
        
    }

 }
 
    // console.log(data);
   
    var response;
    this.apiService.postData("testmanagement/testsetup/createtestsetup?token="+this.token,{ 
      
      "testSetupTitle": loginForm.testSetupTitle,
        "testCategoryId": this.selectedCategory,
        // "testComplexityId": loginForm.testComplexityId,
       "testSetupId":this.testSetupId,
        // "testTypeId": loginForm.testTypeId
        })
      .subscribe(res=>{
        response=res;
        if(response.statusCode==1){
          // console.log(res);
          this.categoryList=response.testSetupDetails.parentDetails ;
          this.testSetupId=response.testSetupDetails.testSetupId;
          // console.log(this.categoryList);
         
          this.categoryList[0].children.forEach(element => {
            if (element.type==2){
              delete element.children;
              // console.log(element)
            }
            
          });
          
         }else{
           // console.log(response);
           this.apiService.errorAlert(response.statusMessage);
         }
      },error=>{
        this.blockUI.stop()
      },
      ()=>{
        this.nodes = this.categoryList;
        this.categoryFlag=true;
        this.blockUI.stop()
      });

    }

  }


  finishTest(){
    this.apiService.postData("testmanagement/testsetup/finishtestsetup?token="+localStorage.getItem('token')+"&testSetupId="+this.testSetupId,{}).subscribe(
      (data)=>{
        // console.log(data)
      if(data['statusCode'] == 1){
        
       // routerLink="done/{{testSetupId}}" /test-setup/done/9
       this.router.navigateByUrl("/test-setup/done/"+this.testSetupId);
      }else{
        this.apiService.errorAlert(data["statusMessage"]);
      }
      },
      (error)=>{
        // console.log(error)
      },
      ()=>{}
    );
  }
  

  showSection(id ){
    // console.log(id);
  }

  categoryName=""
  addCategory(){
    this.apiService.postData("testmanagement/testsetup/createtestsetupcategory?token="+this.token+"&testCategoryName="+encodeURIComponent(this.categoryName),{})
    .subscribe(
      data=>{
        if(data["statusCode"]==1){
          this.apiService.successAlert(data["statusMessage"]);
        }else{
          this.apiService.errorAlert(data["statusMessage"]);
        }
      },
      error=>{

      },
      ()=>{
        this.getListOfCategories();
        $('#myModal').modal('toggle');
        this.categoryName=""
      }
    );
  }

 
 
  onFocused(e){
    // console.log("focussed");
    // do something when input is focused
  }
 
   ngAfterViewInit() {
      
     document.querySelector('div.input-container input').setAttribute('style','border:1px solid #707070;border-radius: 5px;');
   
   }
  getListOfCategories() {
    var res;
    this.apiService.getAll("testmanagement/testsetup/listofdefaulttestcategorys?token="+this.token).subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1){
         res=data["listOfTestCategory"];
        }
      },
      error=>{

      },
      ()=>{
        this.data=[];
        res.forEach(element => {
          this.data.push({id:element.testCategoryId,name:element.testCategoryName})
        });
        // this.data.push({id:0,name:'Create New'})

      }
    );
  }

  onOpened(event){
    $('.suggestions-container').append(" <div class='ng-star-inserted'><a  class='ng-star-inserted'>Create New</a></div>");
  }

  openModal(){
    $('#myModal input').val(this.searchString);
    this.categoryName=this.searchString;
    // console.log(this.searchString);
  }

  addNewCategory(){
    this.categoryName=this.searchString;

    this.apiService.postData("testmanagement/testsetup/createtestsetupcategory?token="+this.token+"&testCategoryName="+this.categoryName,{})
    .subscribe(
      data=>{
        if(data["statusCode"]==1){
          this.apiService.successAlert(data["statusMessage"]);
        }else{
          this.apiService.errorAlert(data["statusMessage"]);
        }
      },
      error=>{

      },
      ()=>{
        this.getListOfCategories();
        // $('#myModal').modal('toggle');
        setTimeout(() => {
          $("b")[1].click();
        //  // console.log($("b")[1]) ;
        }, 300);
        this.categoryName=""

      }
    );

  }
  editFlag=false;
  testMasterEditTitle;
  getTestMasterDetailsById(){
    var response;
    this.apiService.getAll("testmanagement/testsetup/testmasterdetailsbytestsetupid?token="+this.token+"&testSetupId="+this.routeId)
    .subscribe(res=>{
      response=res;
      if(response.statusCode==1){
        // console.log(res);
        this.categoryList=response.testSetupDetails.parentDetails ;
        this.testSetupId=response.testSetupDetails.testSetupId;
        this.testMasterEditTitle=response.testSetupDetails.testSetupTitle;
        // console.log(this.categoryList);
       
        this.categoryList[0].children.forEach(element => {
          if (element.type==2){
            delete element.children;
            // console.log(element)
          }
          
        });
        
       }else{
         // console.log(response);
         this.apiService.errorAlert(response.statusMessage);
       }
    },error=>{
      this.blockUI.stop()
    },
    ()=>{
      this.nodes = this.categoryList;
      this.categoryFlag=true;
      this.blockUI.stop()
    });

  }

  ngOnInit() {

     
    // console.log(this.routeId);
    if(this.routeId==0){
      this.editFlag=false;
      this.getListOfCategories();
    }
    else{
      this.editFlag=true;
      this.getTestMasterDetailsById();

    }

  }

}
