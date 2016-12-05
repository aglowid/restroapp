json.array!(@dinning_tables) do |dinning_table|
  json.extract! dinning_table, :id, :table_no, :max_seat, :is_available
  json.url dinning_table_url(dinning_table, format: :json)
end
