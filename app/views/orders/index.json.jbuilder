json.array!(@orders) do |order|
  json.extract! order, :id, :dinning_table_id, :user_id, :no_of_person, :bill_amount
  json.url order_url(order, format: :json)
end
