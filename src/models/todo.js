/**
 * Created by Administrator on 2016/8/10.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var todoSchema=new Schema({
  isCompleted:Boolean,
  name: String
});
module.exports=mongoose.model('todo',todoSchema);
