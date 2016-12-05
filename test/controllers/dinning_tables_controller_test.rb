require 'test_helper'

class DinningTablesControllerTest < ActionController::TestCase
  setup do
    @dinning_table = dinning_tables(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:dinning_tables)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create dinning_table" do
    assert_difference('DinningTable.count') do
      post :create, dinning_table: { is_available: @dinning_table.is_available, max_seat: @dinning_table.max_seat, table_no: @dinning_table.table_no }
    end

    assert_redirected_to dinning_table_path(assigns(:dinning_table))
  end

  test "should show dinning_table" do
    get :show, id: @dinning_table
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @dinning_table
    assert_response :success
  end

  test "should update dinning_table" do
    patch :update, id: @dinning_table, dinning_table: { is_available: @dinning_table.is_available, max_seat: @dinning_table.max_seat, table_no: @dinning_table.table_no }
    assert_redirected_to dinning_table_path(assigns(:dinning_table))
  end

  test "should destroy dinning_table" do
    assert_difference('DinningTable.count', -1) do
      delete :destroy, id: @dinning_table
    end

    assert_redirected_to dinning_tables_path
  end
end
