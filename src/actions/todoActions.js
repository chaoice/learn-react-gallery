/**
 * Created by Administrator on 2016/8/24.
 */

var Reflux =require( 'reflux');
  'use strict';
  var TodoActions=Reflux.createActions([
    "toggleItem",
    "togglAllItem",
    "addItem",
    "removeItem",
    "clearCompleteItem",
    "editItem"
  ]);
module.exports=TodoActions;

