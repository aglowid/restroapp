# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161205102337) do

  create_table "authentication_tokens", force: :cascade do |t|
    t.integer  "user_id",    limit: 4
    t.string   "auth_token", limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "authentication_tokens", ["user_id"], name: "index_authentication_tokens_on_user_id", using: :btree

  create_table "dinning_tables", force: :cascade do |t|
    t.integer  "table_no",     limit: 4
    t.integer  "max_seat",     limit: 4
    t.boolean  "is_available"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "food_categories", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "food_labels", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "food_types", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "foods", force: :cascade do |t|
    t.string   "name",             limit: 255
    t.text     "ingredients",      limit: 65535
    t.text     "description",      limit: 65535
    t.integer  "food_type_id",     limit: 4
    t.integer  "food_category_id", limit: 4
    t.integer  "food_label_id",    limit: 4
    t.string   "price",            limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "order_items", force: :cascade do |t|
    t.integer  "order_id",   limit: 4
    t.integer  "food_id",    limit: 4
    t.integer  "qty",        limit: 4
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "orders", force: :cascade do |t|
    t.integer  "dinning_table_id", limit: 4
    t.integer  "user_id",          limit: 4
    t.integer  "no_of_person",     limit: 4
    t.string   "bill_amount",      limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_types", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.string   "device_type",            limit: 255
    t.string   "device_token",           limit: 255
    t.string   "first_name",             limit: 255
    t.string   "last_name",              limit: 255
    t.string   "contact_no",             limit: 255
    t.string   "gender",                 limit: 255
    t.integer  "user_type_id",           limit: 4
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["user_type_id"], name: "index_users_on_user_type_id", using: :btree

end
