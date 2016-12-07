json.result do
  json.messages "ok"
  json.rstatus  "1"
  json.errorcode ""
end
json.data do
  json.order_id           @order.id
  json.dinning_table_id   @order.dinning_table_id
  json.dinning_table_no   @order.dinning_table.try(:table_no)
  json.waiter             @order.user.try(:full_name)
  json.no_of_person       @order.no_of_person
  json.bill_amount  @order.bill_amount
  json.order_items @order.order_items do |order_item|
    json.food_id   order_item.food_id
    json.food_name order_item.food.name
    json.qty order_item.qty
  end  
end
