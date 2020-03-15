# Generated by Django 3.0.4 on 2020-03-13 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='group',
            options={'ordering': ['title']},
        ),
        migrations.AlterField(
            model_name='group',
            name='title',
            field=models.CharField(max_length=30),
        ),
        migrations.CreateModel(
            name='Beer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('image', models.ImageField(default='null', upload_to='images/')),
                ('groups', models.ManyToManyField(to='groups.Group')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]