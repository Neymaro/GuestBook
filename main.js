var commentcontrol = (function(){
    
    var Comment = function(name,surname,comment){
        this.name = name;
        this.surname = surname;
        this.comment = comment;
    };
    
    return{
        
        addItem : function(cname,csurname,cmnt){
            
           var newcomment;
           if(cname === '' || csurname === '' === cmnt === ''){
               console.log("Kısımlar Boş");
           }
            else{
               newcomment = new Comment(cname,csurname,cmnt)
           }
           
            return newcomment;
        }
    };
   
})();


// Website Yorum Yazanlar Buradan YowYoW
var websiteUI = (function(){

return{
    getInput : function(){
        return{
            name:document.getElementById('name').value,
            surname:document.getElementById('surname').value,
            message:document.getElementById('comment').value
        };
    },
    
    addListItem : function(obj){
        var html,newHTML
        // HTML Dosyasında Default Değer
        html = '<div class="col-md-3 col-xs-6 boxstyle"><span class="comment-name"><i class="fas fa-user "></i> %name%</span> <span class="comment-surname">%surname%</span><div class="comment">%message%</div></div>'
        
        // Eski HTML Olanı Değiştirdiğim Yer
        newHTML = html.replace('%name%',obj.name);
        newHTML = newHTML.replace('%surname%',obj.surname);
        newHTML = newHTML.replace('%message%',obj.comment);
        
        
        // Yeni Gelecek Mesajlar Nereye Gelsin
        document.querySelector('.basla').insertAdjacentHTML('beforeend', newHTML);
        
    },
    
    
};
    
})();

//Tüm Site Buradan Yönetilmektedir

var controller = (function(website,commentctrl){
    
   var eventDocument = function(){
     // 
    document.querySelector('.add_btn').addEventListener('click', addComment)
     // Reset Form
       function formReset() {
      document.getElementById("formguest").reset();
            }
     //
    document.addEventListener('keypress',function(x){
        if(x.keyCode === 13 || x.which === 13){
            addComment();
            formReset();
            
        }
    })
   };
   var addComment = function(){
       var input,newItem;
        //4.Form Reset
       function formReset() {
      document.getElementById("formguest").reset();
            }
       //1.İsim Soyisimleri Al 
       input= websiteUI.getInput();
       console.log(input)
       
        //2.Kontrolleri Sağla
        newItem =commentctrl.addItem(input.name,input.surname,input.message)
       if(input.name == "" ||input.surname=="" ||input.message==""){
           alert("Please Fill All Form Inputs!")
           return false
       }
        //3.Ekrana Eklet
       websiteUI.addListItem(newItem);
       formReset()
       
       
       
   };
   
    return{
        init : function(){
            console.log("Welcome to GuestBook's Log! What You looking for here? Are You Gonna Hire Me? If Yes Reach me! Hamzaunsall@gmail.com               ̿ ''\̵͇̿̿\з=( ͡ °_̯͡° )=ε/̵͇̿̿/'̿'̿ ̿ ")
            eventDocument()
        }
    };
   
})(websiteUI,commentcontrol);

controller.init();