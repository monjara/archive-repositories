require 'test_helper'

class ReactCrudDataControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get react_crud_data_index_url
    assert_response :success
  end

end
