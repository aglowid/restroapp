module ApplicationHelper
	def active_class(link_path)
	  "active" if request.fullpath == link_path
	end

	def edit_link(link_href)
    link_to link_href, :class => "" do
      ((content_tag :i, "", :class => "icon-pencil3 pull-right redicon").html_safe + (content_tag :span , "Edit")).html_safe
    end
  end

  def delete_link(link_href)
    link_to link_href, :method => :delete, data: { confirm: "Are you sure?" } , :class => "" do
      ((content_tag :i, "", :class => " icon-trash pull-right redicon").html_safe + (content_tag :span , "Delete")).html_safe
    end
  end
end
