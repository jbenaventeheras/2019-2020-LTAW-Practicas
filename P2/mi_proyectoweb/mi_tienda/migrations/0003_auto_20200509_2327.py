# Generated by Django 2.2.10 on 2020-05-09 23:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0002_pedido'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pedido',
            old_name='nombre',
            new_name='nombres',
        ),
    ]
