import random
import lorem


def __generate_content(paragraph_count):
    content = []
    for _ in range(paragraph_count):
        content.append(lorem.paragraph())
    return '\n'.join(content)


def generate_posts(post_count:int):
    list_of_dicts = []
    for post_id in range(post_count):
        dictionary = {
            'id': post_id,
            'title': lorem.sentence(),
            'content': __generate_content(random.randint(3, 10))
        }
        list_of_dicts.append(dictionary)
    return list_of_dicts