json.array!(@food_labels) do |food_label|
  json.extract! food_label, :id, :name
  json.url food_label_url(food_label, format: :json)
end
