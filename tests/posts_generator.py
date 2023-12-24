import random


def random_title():
    words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
    num_words = random.randint(1, 5)
    return ' '.join(random.choices(words, k=num_words)).capitalize()


def random_content():
    words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
    num_paragraphs = random.randint(3, 10)
    content = ''
    for _ in range(num_paragraphs):
        num_words = random.randint(15, 200)
        paragraph = ' '.join(random.choices(words, k=num_words)).capitalize()
        content += paragraph + '\n'
    return content.strip()


def generate_posts(count:int):
    list_of_dicts = []
    for i in range(count):
        dictionary = {
            'id': str(random.randint(100, 999)),
            'title': random_title(),
            'content': random_content()
        }
        list_of_dicts.append(dictionary)
    return list_of_dicts