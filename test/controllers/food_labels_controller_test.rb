require 'test_helper'

class FoodLabelsControllerTest < ActionController::TestCase
  setup do
    @food_label = food_labels(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:food_labels)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create food_label" do
    assert_difference('FoodLabel.count') do
      post :create, food_label: { name: @food_label.name }
    end

    assert_redirected_to food_label_path(assigns(:food_label))
  end

  test "should show food_label" do
    get :show, id: @food_label
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @food_label
    assert_response :success
  end

  test "should update food_label" do
    patch :update, id: @food_label, food_label: { name: @food_label.name }
    assert_redirected_to food_label_path(assigns(:food_label))
  end

  test "should destroy food_label" do
    assert_difference('FoodLabel.count', -1) do
      delete :destroy, id: @food_label
    end

    assert_redirected_to food_labels_path
  end
end
