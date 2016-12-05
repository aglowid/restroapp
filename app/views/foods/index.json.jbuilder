json.array!(@foods) do |food|
  json.extract! food, :id, :name, :ingredients, :description, :food_type_id, :food_category, :food_label, :price
  json.url food_url(food, format: :json)
end
